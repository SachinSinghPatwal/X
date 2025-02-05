import React from "react";
import { useMediaQuery } from "react-responsive";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input, RTE } from "../../index";
import fileService from "../../../AppwriteServices/FileService/FileService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import databaseService from "../../../AppwriteServices/DBService/DBService";
import { changeVisibility } from "../../../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Message({ post }) {
  const status = useSelector((state) => state.auth.composePostVisibility);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? fileService.uploadFile(data.image[0]) : null;
      if (file) {
        fileService.deleteFile(post.featuredImage);
      }
      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        dispatch(changeVisibility(!status));
      }
    } else {
      const file = await fileService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await databaseService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          dispatch(changeVisibility(!status));
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value == "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name == "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidate: true,
          })
        );
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);
  return (
    <form onSubmit={handleSubmit(submit)} className="h-fit">
      <div className="text-white outline outline-offset-[-1px] outline-[#7F48CD] rounded-[10px]">
        <main>
          <Input
            placeholder="Title is required and visible to others above post."
            className="pl-[.2rem] h-[2rem] absolute z-[10000] left-[10%] 
            top-[2%] my-[.2rem] rounded-sm bg-[#212426] border-[2px] border-[#7F48CD] 
            sm:w-[68%] w-[60%] placeholder:text-gray-600 sm:ml-0 ml-[.6rem]"
            {...register("title", {
              required: true,
            })}
          />
          <Input
            placeholder="slug"
            className="invisible absolute"
            {...register("slug", {
              required: true,
            })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            name="content"
            control={control}
            defaultValues={getValues("content")}
          />
          <input
            type="file"
            className="absolute top-[3.2%] right-2 z-[100]
            w-[6rem] rounded-[5px] "
            accept="image/png , image/jpg , image/jpeg , image/gif"
            {...register("image", {
              required: !post,
            })}
          />
          {post && (
            <div className="w-full">
              <img
                src={fileService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <button
            className="absolute bottom-2 left-2 hover:bg-gray-800
          w-[30px] aspect-square hover:rounded-full transition-all "
            onClick={() => {
              dispatch(changeVisibility(!status));
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
          <button
            type="submit"
            className={`${
              post ? "bg-green-500" : "bg-[#6c3dad] hover:bg-[#7F48CD]"
            } w-[4rem] h-[2rem] rounded-md absolute bottom-3 right-3`}
          >
            {post ? "Update" : "Post"}
          </button>
        </main>
      </div>
    </form>
  );
}

export default Message;
