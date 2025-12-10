import HeroBanner from "@/components/banner/Hero";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata (): Promise<Metadata>{
  
  
  return {
    tilte: "Home page",
    description: "",
    openGraph: {
      title: "",
      url: "",
      description: "",
      images: [""],
    },
  } as Metadata;
};

interface IProduct{
  afterDiscount: number,
  brand:{
    _id: string, 
    name: string, 
    slug: string, 
    logo: string
  }
  category: {
    _id:string, name:string, slug: string
  }
  createdAt: Date
  createdBy: null,
  description: string,
  discount: number,
  images: Array<string>,
  name: string,
  price: number,
  seller:{
    _id: string, 
    name:string, 
    email: string, phone: string, address: string
  }
  slug: string,
  status: string,
  updatedAt: Date,
  updatedBy: string
  _id: string
}

export default async function Home() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/product?page=1&limit=15', {
    method:"GET",
  });
  let data;
  if(response.ok) {
    data = await response.json()
  }

  
  
  return (
    <>
      <HeroBanner />

      {/* Banner Info section */}
      <section className="bg-white lg:grid lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Understand user flow and
              <strong className="text-indigo-600"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Ends here Banner Info */}

      {/* Product List Grid starts */}
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-7xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                For You !!!!
              </h2>
            </div>
          </div>

          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
            {data.data &&
              data.data.map((prod: IProduct, i: number) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="h-56 w-full">
                    <Link href={'/product/'+prod.slug}>
                      <img
                        className="mx-auto h-full"
                        src={process.env.NEXT_PUBLIC_ASSETS_URL+prod.images[0]}
                        crossOrigin="anonymous"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      {
                        prod.discount && prod.discount > 0 ? <>
                        <span className="me-2 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                        {" "}
                        Up to {prod.discount}% off{" "}
                      </span>
                        </> : <></>
                      }
                    </div>

                    <Link
                      href={"/product/"+prod.slug}
                      className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
                    >
                      {prod.name}
                    </Link>


                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 ">
                          Fast Delivery
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 ">
                          Best Price
                        </p>
                      </li>
                    </ul>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900">
                        Npr. {prod.afterDiscount/100}
                      </p>

                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4  focus:ring-teal-300 "
                      >
                        <svg
                          className="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="w-full text-center">
            <Link
              href="/product"
              type="button"
              className="rounded-lg border border-yellow-900 bg-yellow-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-900 hover:text-yellow-50 focus:z-10 focus:outline-none focus:ring-4 focus:ring-yellow-100"
            >
              Show more
            </Link>
          </div>
        </div>
      </section>
      {/* Product List Grid ends here */}
    </>
  );
}
