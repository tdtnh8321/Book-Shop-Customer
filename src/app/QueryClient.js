import { QueryClient, QueryClientProvider } from "react-query";

function QueryClientApp(props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default QueryClientApp;
