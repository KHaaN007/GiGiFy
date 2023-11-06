import { useQuery } from '@tanstack/react-query';


const useJobs = () => {

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['jobsData'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/jobs');
            return await data.json();
        }
    })


    return { data, isLoading, isFetching }
};

export default useJobs;