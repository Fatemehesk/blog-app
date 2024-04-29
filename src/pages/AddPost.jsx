import Container from "../Components/containers/Container";
import PostForm from "../Components/postsform/PostForm";

const AddPost = () => {
  return (
    <div className="py-6">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
};

export default AddPost;
