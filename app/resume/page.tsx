const Page: React.FC<{}>  = ({}) => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-5">
          <div className="w-full p-2 bg-white">
            <embed src="/assets/documents/TEJAS KANJI 2023 APR V5.pdf"
            type="application/pdf"
            height={840}
            width="100%"
            />
          </div>
        </main>
      );
}

export default Page;
