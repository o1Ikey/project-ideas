import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import defaultBanner from "../assets/images/blog-banner.png";
import { AnimationWrapper } from "../components/AnimationWrapper";
import { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../services/tools";
import toast from "react-hot-toast";

export const BlogEditor = ({ blog, setBlog, textEditor, setTextEditor }) => {
  const handleBannerUpload = (e) => {
    const img = e.target.files;
  };

  const handleTitleKeyDown = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    let input = e.target;

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    setBlog({
      ...blog,
      title: input.value,
    });
  };

  const handlePublish = async (e) => {
    const { title, banner, content, tags, des, author } = blog;
    if (!title.length) {
      return toast.error("Write blog title to publish");
    }

    if (textEditor.isReady) {
      textEditor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  useEffect(() => {
    setTextEditor(
      new EditorJS({
        holderId: "textEditor",
        data: "",
        placeholder: "Let's write an awesome story",
        tools: tools,
      })
    );
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">
          {blog.title.length ? blog.title : "New Blog"}
        </p>

        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlePublish}>
            Publish
          </button>
          <button className="btn-light py-2">Save Draft</button>
        </div>
      </nav>
      <AnimationWrapper key="banner">
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-grey">
              <label htmlFor="uploadBanner">
                <img src={defaultBanner} className="z-20" />

                <input
                  id="uploadBanner"
                  type="file"
                  hidden
                  accept=".png, .jpg, .jpeg"
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
            <textarea
              placeholder="Blog Title"
              className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40 "
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            ></textarea>
            <hr className="w-full opacity-10 my-5" />
            <div id="textEditor" className="font-gelasio"></div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};
