import { useState, useEffect } from "react";
import { Section, Container } from "@containers";
import { Card } from "@ui";

import { PostItem } from "@interface";
import { postAPI } from "@service";

import "./style.scss";
const index = () => {
  const [post, setPost] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | boolean>("");

  async function getPost() {
    try {
      const response = await postAPI.get();

      if (response.status !== 200) {
        setError(response.statusText);
        setLoading(false);
      }
      console.log(response.data.products );
      
      setPost(response.data.products);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Section id={"post"} title="Prodact list">
      <Container>
        {!loading ? (
          <div className=" grid grid-cols-4">
            {post.length ? post?.map((item: PostItem) => {
              return <Card key={item.id} data={item} />
            }): ""}

          </div>
          
        ) : (
          <h1>LOADING ....</h1>
        )}

        {error && <h1>{error}</h1>}
      </Container>
    </Section>
  );
};

export default index;
