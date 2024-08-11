import PostsTable from "@/components/posts/PostsTable";
import React from "react";

import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/"></BackButton>
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
