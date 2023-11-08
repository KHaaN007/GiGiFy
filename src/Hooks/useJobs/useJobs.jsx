import { useQuery } from '@tanstack/react-query';


const useJobs = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['jobsData'],
        queryFn: async () => {
            const data = await fetch('https://full-stack-website-marketplace-server.vercel.app/jobs');
            return await data.json();
        }
    })


    return { data, isLoading, isFetching, refetch }
};

export default useJobs;