import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { Navigate } from "react-router-dom";
import { BlogEditor } from "./BlogEditor";

const initialBlog = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: {
    personalInfo: {},
  },
};

export const Editor = () => {
  const { userAuth } = useContext(UserContext);
  const { accessToken } = userAuth.data;

  const [blog, setBlog] = useState(initialBlog);
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });

  const renderComponent =
    editorState === "editor" ? (
      <BlogEditor
        blog={blog}
        setBlog={setBlog}
        textEditor={textEditor}
        setTextEditor={setTextEditor}
      />
    ) : (
      <></>
    );

  return accessToken === null ? <Navigate to={"/signin"} /> : renderComponent;
};
