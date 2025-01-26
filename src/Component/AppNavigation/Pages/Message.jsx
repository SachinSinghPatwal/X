import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE } from "../../index";
import fileService from "../../../AppwriteServices/FileService/FileService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import databaseService from "../../../AppwriteServices/DBService/DBService";
function Message({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if (post) {
      data.image[0] ? fileService.uploadFile(data.image[0]) : null;
      if (file) {
        fileService.deleteFile(post.featuredImage);
      }
      const DbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (DbPost) {
        navigate("/Home/allpost");
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
          navigate("/Home/allpost");
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value == "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if ((name = "title")) {
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

  const screenStatus = useMediaQuery({ query: "(max-width:625px)" });
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="border-x-[1px] border-gray-700 text-white h-screen">
        <header
          className={`h-[3rem] grid place-items-center 
      border-gray-700 border-b-[1px]
        sm:w-[79.7vw] 
        md:w-[598px] 
        lg:w-[598px]
        backdrop-blur-sm
        w-[79.6vw]
        ${screenStatus && "w-[79.6vw]"}
      `}
        >
          <div
            className={`h-fit w-[70vw] md:w-[523px]
            grid grid-cols-[auto_.1%] items-center
        `}
          >
            <h1 className="text-[20px]">Create Post</h1>
            <div>
              <FontAwesomeIcon icon={faGear} style={{ color: "white" }} />
            </div>
          </div>
        </header>
        <main>
          <Input
            placeholder="title"
            className="mb-[1rem]"
            {...register("title", {
              required: true,
            })}
          />
          <Input
            placeholder="slug"
            className="mb-[1rem]"
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
            label="Content: "
            name="content"
            control={control}
            defaultValues={getValues("content")}
          />
          <Input
            type="file"
            className="mb-[1rem]"
            accept="image/png , image/jpg , image/jpeg , image/gif"
            {...register("image", {
              required: !post,
            })}
          />
          {post && (
            <div>
              <img
                src={fileService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
        </main>
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          Children={post ? "Update" : "Submit"}
        ></Button>
      </div>
    </form>
  );
}

export default Message;
