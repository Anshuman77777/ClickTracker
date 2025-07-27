import { useState } from "react";
import { Copy } from "lucide-react";

export default function Share() {
  const [copied, setCopied] = useState(false);
  const [refSource, setRefSource] = useState("");

  const shareUrl = `https://localhost:3000/gate/0131?ref=${refSource}`;

  const handleCopy = async () => {
    if(refSource.length==0){alert('Adding some reference source is mandatory');return;}
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-4 rounded-xl border shadow-md bg-white w-full space-y-3">
      <label className="text-sm font-semibold text-gray-600">Enter referral source:</label>
      <input
        type="text"
        placeholder="e.g. instagram, linkedin"
        value={refSource}
        onChange={(e) => {
          setRefSource(e.target.value);
          setCopied(false);
        }}
        className="w-full px-3 py-2 text-sm text-black bg-gray-100 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <p className="text-sm text-gray-700">
        <span className="font-semibold">Generated URL:</span>  
        <code className="ml-1 break-all text-blue-600">{shareUrl}</code>
      </p>

      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <Copy size={16} />
        {copied ? "Copied!" : "Copy Link to Share"}
      </button>
    </div>
  );
}
