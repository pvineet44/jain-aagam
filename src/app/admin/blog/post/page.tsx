import { Suspense } from "react";
import BlogDataTable from "./BlogsDataTable";
import { authorizeUser } from "@/lib/auth";
import NoPermission from "@/components/common/NoPermission";

export default async function CategoriesPage() {

  const user = await authorizeUser(["view:blog-category"]);

  if (!user.success) {
    return (
      <NoPermission message={user.message} />
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogDataTable />
      </Suspense>
    </div>
  );
}