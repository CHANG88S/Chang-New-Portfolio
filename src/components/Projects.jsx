export const Projects = () => {
    return (    
    
    <div className="max-w-2xl mx-auto z-35 justify-center">
        <div className="w-full mt-8 flex flex-col">
            <div className="flex items-center">
                <h1 className="text-3xl font-bold">Projects</h1>
            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"> { /* Project Layouts */ }

                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <img class="h-full w-full object-cover rounded-md maskImage" src="src\assets\portfolio2.png" alt="Project 1 Image"/>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">SudoResume</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>AI-Powered Platform for ATS-Friendly and Optimized Resumes.</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Node.js</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Express</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">OpenAI API</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/FoodAppTS">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                    Website
                                    </svg> */}
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>

                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <img class="h-full w-full object-cover rounded-md maskImage" src="src\assets\portfolio2.png" alt="Project 1 Image"/>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">SudoResume</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>AI-Powered Platform for ATS-Friendly and Optimized Resumes.</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Node.js</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Express</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">OpenAI API</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/FoodAppTS">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                    Website
                                    </svg> */}
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>

                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <img class="h-full w-full object-cover rounded-md maskImage" src="src\assets\portfolio2.png" alt="Project 1 Image"/>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">SudoResume</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>AI-Powered Platform for ATS-Friendly and Optimized Resumes.</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Node.js</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Express</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">OpenAI API</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/FoodAppTS">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                    Website
                                    </svg> */}
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>

                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <img class="h-full w-full object-cover rounded-md maskImage" src="src\assets\portfolio2.png" alt="Project 1 Image"/>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">SudoResume</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>AI-Powered Platform for ATS-Friendly and Optimized Resumes.</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Node.js</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Express</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">OpenAI API</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/FoodAppTS">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                    Website
                                    </svg> */}
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>

            </div>                                          { /* Project Layouts */ }

        </div>
    </div>
    
    );
};