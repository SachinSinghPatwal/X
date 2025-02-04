import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import Loader from "../../Loader/Loader";

function RTE({ name, control, defaultValue = "" }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [loading]);
  return (
    <div className="w-full rounded-[10px] relative">
      {loading ? (
        <div
          className="absolute bottom-[0rem] left-0 h-[301.6px] w-[550px] 
        z-[10000000000] bg-black rounded-[10px]"
        >
          <Loader bg="black" className="absolute top-[-30%] left-[38%]" />
        </div>
      ) : (
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="f8o19znixz06bfbidnarc4lujk0xfax6m7km4guxvo0xjh4v"
              init={{
                initialValue: defaultValue,
                highlight_on_focus: false,
                height: 300,
                skin: "oxide-dark",
                resize: false,
                color_default_foreground: "gray",
                menubar: false,
                adv_code_inline: true,
                statusbar: false,
                plugins: ["media"],
                toolbar: "media",
                content_style: `
                body {
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  background-color: black;
                  color: gray;
                }
                .tox-tinymce {
                  border:none !important;
                  box-shadow: none !important;
                  background: gray !important;
                }
                .tox-tinymce:focus {
                  outline: none !important;
                }
              `,
              }}
              onEditorChange={onChange}
            />
          )}
        />
      )}
    </div>
  );
}

export default RTE;
