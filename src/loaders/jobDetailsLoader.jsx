export const JobDetailsLoader = async ({ params }) => {
    try {
        const response = await fetch("../../public/featured-job.json");
        const data = await response.json();
        // console.log(data);
        if (Array.isArray(data)) {
            const singleData = await data.find(
                (job) => job.id === parseInt(params.jobId)
            );
            return { data: singleData };
        } else return { data: null };
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
