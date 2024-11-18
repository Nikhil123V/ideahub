
import Image from "next/image";
import SearchFrom from "@/components/SearchFrom";
import StartupCard,{StartupTypeCard} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";



export default async function Home({searchParams,}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query=(await searchParams).query;
    const params={search:query || null};



    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY,params});

   // const posts=[{
     //   _createdAt: new Date(),
      //  views:55,
        //author:{_id:1,name:'nikhil'},
       // _id:1,
       // description:'This is a description',
        //image:'https://images.pexels .com/photos/7092350/pexels-photo-7092350.jpeg',
        //category:'Robots',
       // title:'We Robots',
   // },
 //   ];
  return(
      <>
          <section className='pink_container'>
          <h1 className='heading'>Fueling the Future, One Pitch at a Time.</h1>
              <p className='sub-heading !max-w-3xl' >Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                  Competitions. </p>

              <Image
                  src="/idea1.svg"
                  width={50}
                  height={100}
                  alt="Picture of the author"
                  className='idea'
              />
              <SearchFrom query={query}/>
          </section>

          <section className='section_container'>
              <p className='text-30-semibold'>
                  {query ? `Search results for "${query}"` : "All Startups"}
              </p>
              <ul className='mt-7 card_grid'>
                  {posts ?. length >0 ?(
                      posts.map((post:StartupTypeCard)=>(
                          <StartupCard key={post?._id} post={post}/>

                      ))
                  ):(
                      <p className='no-result'>No Startups found</p>
                  )}
              </ul>


          </section>
          <SanityLive/>
      </>

  )
}