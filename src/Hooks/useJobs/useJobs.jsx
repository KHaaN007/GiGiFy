import { useQuery } from '@tanstack/react-query';


const useJobs = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['jobsData'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/jobs',{credentials : 'include'});
            return await data.json();
        }
    })


    return { data, isLoading, isFetching, refetch }
};

export default useJobs;