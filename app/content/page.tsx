const POST_GRAPHQL_FIELDS = `
  slug
  title
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
      next: { tags: ['posts'] },
    },
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log({ err });
    });
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

export default async function Page() {
  const isDraftMode = true;
  const entries = await fetchGraphQL(
    `{
      postCollectio(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        
      }
    }`,
    isDraftMode,
  );

  console.log({ entries: entries.errors });

  return <div>Hi</div>;
}
