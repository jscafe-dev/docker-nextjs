import { fetchContent, createContent } from "@/actions/content";
import Form from "@/components/form";

export default async function Home() {
  const contents = await fetchContent();
  return (
    <main className="p-24">
      <h4>Create Content</h4>
      <Form createContent={createContent} />
      <h1>List of TODO</h1>
      <ul>
        {contents.map(({ content, id }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </main>
  );
}
