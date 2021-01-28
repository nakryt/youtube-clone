interface TopLevelCommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: {
    value: string;
  };
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

interface TopLevelComment {
  kind: "youtube#comment";
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

interface CommentSnippet {
  videoId: string;
  topLevelComment: TopLevelComment;
}

export interface ItemComment {
  kind: "youtube#commentThread";
  etag: "cQ6G7yzY8mn8fB_B4uFu8NgcjpY";
  id: "Ugx-IUPmKSCudLktk7R4AaABAg";
  snippet: CommentSnippet;
}

export interface CommentResponse {
  kind: "youtube#commentThreadListResponse";
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ItemComment[];
}
