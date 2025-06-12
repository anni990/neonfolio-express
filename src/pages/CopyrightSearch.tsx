import React, { useEffect } from 'react';
import { ArrowLeft, Copy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CopyrightSearchProps {
  diaryNumber?: string;
}

const CopyrightSearch: React.FC<CopyrightSearchProps> = ({ diaryNumber = '26283/2024-CO/L' }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(diaryNumber);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-code-blue hover:text-code-blue/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Copyright Search
            </h1>
            <p className="text-lg text-foreground/80">
              Search for copyright registration details
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Option 1: Direct Link */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Option 1: Direct Search</h2>
              <p className="mb-4 text-foreground/70 dark:text-white/70">
                Click the button below to go to the copyright search page:
              </p>
              <a
                href="https://www.copyright.gov.in/SearchRoc.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-code-blue text-white hover:bg-code-blue/90 transition-colors"
              >
                Go to Search Page
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Option 2: Copy Diary Number */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Option 2: Copy Diary Number</h2>
              <p className="mb-4 text-foreground/70 dark:text-white/70">
                Copy the diary number and paste it into the search field:
              </p>
              <div className="flex items-center gap-4">
                <code className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 font-mono">
                  {diaryNumber}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-foreground/70 dark:text-white/70">
                <li>Click "Go to Search Page" to open the copyright search website</li>
                <li>Copy the diary number using the copy button above</li>
                <li>Paste the diary number into the "Diary Number" field</li>
                <li>Click the "Search" button to view the results</li>
              </ol>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Note: Due to security restrictions, we cannot automatically fill in the search form. 
                Please follow the instructions above to perform the search manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSearch; 