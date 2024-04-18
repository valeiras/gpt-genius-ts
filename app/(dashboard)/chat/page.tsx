import Chat from "@/components/Chat";
import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

type Props = {};

const ChatPage: React.FC<Props> = ({}) => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};

export default ChatPage;
