declare interface PostsResponse {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
}

declare interface Content {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  excerpt: string;
  tags: Tag[];
  body: string;
}

declare interface Tag {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}
