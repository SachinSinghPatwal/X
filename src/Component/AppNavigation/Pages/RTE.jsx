import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, defaultValue = "" }) {
  return (
    <div className="w-full rounded-[10px] relative">
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
                  font-size: 20px;
                  background-color: black;
                  color: white;
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
    </div>
  );
}

export default RTE;
