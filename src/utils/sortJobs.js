export const sortJobs = (arr, convert) => {
  if (Array.isArray(arr)) {
     return arr.sort((a, b) => (convert(a.created_at) > convert(b.created_at) ?
    1 : (convert(b.created_at) > convert(a.created_at)) ? -1 : 0));
  }
  return; 
};