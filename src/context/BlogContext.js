import React from 'react';
const BlogContext = React.createContext();
//BlogContext an obj which will move info from BPP to blog list

export const BlogProvider ({children}) => {
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}

//Blodprovider is a component