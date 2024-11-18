import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})//when you had use True in UseCdn it no shown the data by every second insted of that it will update the data every 60 second it will update the dtat by every 60 scecond
