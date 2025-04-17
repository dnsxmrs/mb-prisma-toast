import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-primary-dark text-foreground">
            <div className="animate-pulse space-y-4">
                <div className="h-4 bg-foreground/20 rounded w-3/4"></div>
                <div className="h-4 bg-foreground/20 rounded w-1/2"></div>
                <div className="h-4 bg-foreground/20 rounded w-full"></div>
            </div>
        </div>
    );
};

export default Loading;
