import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

export default function CreatePostPage() {
  return (
    <div className="h-full bg-gray-900">
      <CreatePost></CreatePost>
      <PostList></PostList>
    </div>
  );
}
