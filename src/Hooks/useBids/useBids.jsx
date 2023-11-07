import { useQuery } from '@tanstack/react-query';


const useBids = () => {
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['bidsData'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/bids');
            return await data.json();
        }
    })


    return { data, isLoading, isFetching, refetch }
};

export default useBids;