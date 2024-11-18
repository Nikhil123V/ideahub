import Link from "next/link";
import Image from "next/image";
import {SignedIn, UserButton} from "@clerk/nextjs";


const Navbar = async () => {


    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/my-app/public">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                    <p className='logo-subtext'>Connect. Collaborate. Create.</p>
                </Link>

                <div className="flex items-center gap-5 text-black">

                    <>
                        <Link href="/startup/create">
                            <span className="max-sm:hidden text-black">Create</span>

                        </Link>


                        <button type="submit">
                            <span className="max-sm:hidden">Logout</span>

                        </button>

                        <Link href='/'>


                        </Link>
                    </>


                    <button type="submit">Login</button>
                    <div className='flex-between gap-5'>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>


                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;