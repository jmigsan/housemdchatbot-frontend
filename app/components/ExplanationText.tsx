const ExplanationText = () => {
    return (
        <div>
            <h1>Problem:</h1>
            <p className='pl-5'>
                After <span className='italic'>House MD</span> finished, I miss
                listening to Dr Gregory House talk. I want to hear medicine
                wisdom in his sarcastic, cynical, and witty tone.
            </p>
            <h1>Solution:</h1>
            <p className='pl-5'>
                I created this chatbot that sounds like Dr Gregory House and has
                knowledge of various medical topics from Wikipedia.
            </p>
            <h1>How I made this:</h1>
            <p className='pl-5'>
                <span className='underline'>Finetuning:</span> I finetuned a
                Qwen3 4B model using Unsloth on the cloud using GCP's Compute
                Engine. I finetuned the model on House's personality by
                community made transcripts of episodes 3 to 9. I created
                training data based on these episodes. I also created synthetic
                training data using these episdodes and included them in the
                finetuning training dataset.
            </p>
            <p className='pl-5'>
                <span className='underline'>RAG:</span> This chatbot has access
                to various medical Wikipedia articles. Including categories such
                as: Medical diagnosis, Diseases and disorders, Rare diseases. I
                got these articles using Wikipedia's Export feature. I parsed
                the data using wikiextractor. Then upsert the data into a
                Pinecone vector database.
            </p>
            <p className='pl-5'>
                <span className='underline'>Tech stack:</span> I'm using
                Next.js, React, Tailwind CSS, TypeScript, Python, FastAPI,
                Vercel, and GCP.
            </p>
            <h1>Attribution:</h1>
            <p className='pl-5'>
                Background from. Taskbar from. Greggory House image from. MSN
                Messenger logo from. Font from. Line, Square, Cross svg icons
                from.
            </p>
            <h1>Links:</h1>
            <ul className='list-disc pl-5'>
                <li>
                    <a href='https://jmigsan.vercel.app' className='underline'>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='https://github.com/jmigsan' className='underline'>
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default ExplanationText;
