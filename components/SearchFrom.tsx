import React from 'react'
import Form from "next/form";
import SearchFormReset from "@/components/SearchFromReset";
import {Search} from "lucide-react";

const SearchFrom = ({query}:{query?:string}) => {

    return (
        <Form action='/' scroll={false} className='search-form'>
     <input
     className='search-input'
     name='query'
     defaultValue={query}
     placeholder='Search Startups'
     />
            <div className='flex gap-2'>

                {query && <SearchFormReset/>}
                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5'/>
                </button>
            </div>

        </Form>
    )
}
export default SearchFrom
