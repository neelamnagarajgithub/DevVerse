import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Upload, 
  Github, 
  Coins, 
  Shield, 
  Users, 
  AlertCircle,
  CheckCircle,
  Wallet
} from 'lucide-react';

const MintingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    githubUrl: '',
    tags: '',
    licenseType: 'MIT',
    isPublic: true,
    thumbnail: null
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      setIsConnected(true);
      return;
    }
    setShowConfirmation(true);
  };

  const handleMint = () => {
    // Simulate minting process
    setShowConfirmation(false);
    // Redirect to dashboard or show success message
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Link
        to="/app"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </Link>

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Mint Your Project as NFT</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transform your code repository into a digital asset. Establish ownership, enable monetization, 
          and unlock the power of decentralized governance.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            1
          </div>
          <span className="text-purple-400 font-medium">Project Details</span>
        </div>
        <div className="w-8 h-px bg-gray-600"></div>
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isConnected ? 'bg-purple-600 text-white' : 'bg-gray-600 text-gray-400'
          }`}>
            2
          </div>
          <span className={`font-medium ${isConnected ? 'text-purple-400' : 'text-gray-400'}`}>
            Connect Wallet
          </span>
        </div>
        <div className="w-8 h-px bg-gray-600"></div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 text-sm font-bold">
            3
          </div>
          <span className="text-gray-400 font-medium">Mint NFT</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700 space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-white font-medium mb-2">Project Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                placeholder="Enter your project name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-medium mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                placeholder="Describe what your project does and its key features"
                required
              />
            </div>

            {/* GitHub URL */}
            <div>
              <label className="block text-white font-medium mb-2">GitHub Repository URL *</label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                  placeholder="https://github.com/username/repository"
                  required
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-white font-medium mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                placeholder="React, TypeScript, AI, Web3 (comma separated)"
              />
            </div>

            {/* License Type */}
            <div>
              <label className="block text-white font-medium mb-2">License Type</label>
              <select
                name="licenseType"
                value={formData.licenseType}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
              >
                <option value="MIT">MIT License</option>
                <option value="Apache-2.0">Apache License 2.0</option>
                <option value="GPL-3.0">GNU General Public License v3.0</option>
                <option value="BSD-3-Clause">BSD 3-Clause License</option>
                <option value="Custom">Custom License</option>
              </select>
            </div>

            {/* Thumbnail Upload */}
            <div>
              <label className="block text-white font-medium mb-2">Project Thumbnail</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">Drop your image here, or click to browse</p>
                <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFormData(prev => ({ ...prev, thumbnail: e.target.files?.[0] || null }))}
                />
                <button
                  type="button"
                  className="mt-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Choose File
                </button>
              </div>
            </div>

            {/* Access Toggle */}
            <div className="bg-gray-700/50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium mb-1">Public Access</h3>
                  <p className="text-gray-400 text-sm">Allow anyone to view your project details</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, isPublic: !prev.isPublic }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    formData.isPublic ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.isPublic ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              {!isConnected ? (
                <>
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet to Continue</span>
                </>
              ) : (
                <>
                  <Coins className="w-5 h-5" />
                  <span>Mint as NFT</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Benefits */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Why Mint Your Project?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Establish Ownership</p>
                  <p className="text-gray-400 text-sm">Prove authorship and creation date on-chain</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Enable Monetization</p>
                  <p className="text-gray-400 text-sm">Earn through auctions, royalties, and licensing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Community Governance</p>
                  <p className="text-gray-400 text-sm">Let contributors vote on project decisions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Access Control</p>
                  <p className="text-gray-400 text-sm">Gate features with BitBadges and NFTs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estimated Costs */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Estimated Costs</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Minting Fee</span>
                <span className="text-white">~0.05 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Gas Fee</span>
                <span className="text-white">~0.02 ETH</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between font-bold">
                <span className="text-white">Total</span>
                <span className="text-green-400">~0.07 ETH</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-blue-300 text-sm">
                  Gas fees vary based on network congestion. Final cost will be shown before confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <div className="text-center mb-6">
              <Coins className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Confirm Minting</h3>
              <p className="text-gray-400">
                You're about to mint "{formData.name}" as an NFT on-chain. Gas fees apply.
              </p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Project</span>
                <span className="text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">License</span>
                <span className="text-white">{formData.licenseType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated Cost</span>
                <span className="text-green-400">~0.07 ETH</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleMint}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all"
              >
                Confirm Mint
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MintingPage;