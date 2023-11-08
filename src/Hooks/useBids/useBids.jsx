import { useQuery } from '@tanstack/react-query';


const useBids = () => {
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['bidsData'],
        queryFn: async () => {
            const data = await fetch('https://full-stack-website-marketplace-server.vercel.app/bids', {credentials: 'include'});
            return await data.json();
        }
    })


    return { data, isLoading, isFetching, refetch }
};

export default useBids;