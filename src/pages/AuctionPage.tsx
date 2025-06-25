import React, { useState } from 'react';
import { 
  Clock, 
  TrendingUp, 
  Users, 
  Filter, 
  Search,
  Gavel,
  ExternalLink,
  Star
} from 'lucide-react';

const AuctionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showBidModal, setShowBidModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const auctions = [
    {
      id: 1,
      name: 'AI Code Assistant',
      description: 'VS Code extension for AI-powered code completion',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
      currentBid: '2.4 ETH',
      bidCount: 12,
      timeLeft: '2d 14h 32m',
      contributors: 8,
      tags: ['AI', 'VSCode', 'TypeScript'],
      license: 'MIT',
      status: 'active'
    },
    {
      id: 2,
      name: 'DeFi Analytics Dashboard',
      description: 'Real-time DeFi protocol analytics and yield tracking',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      currentBid: '1.8 ETH',
      bidCount: 8,
      timeLeft: '5d 8h 15m',
      contributors: 6,
      tags: ['DeFi', 'React', 'Web3'],
      license: 'Apache-2.0',
      status: 'active'
    },
    {
      id: 3,
      name: 'Smart Contract Auditor',
      description: 'Automated security analysis for Solidity contracts',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      currentBid: '3.2 ETH',
      bidCount: 15,
      timeLeft: '1d 6h 45m',
      contributors: 4,
      tags: ['Security', 'Solidity', 'Blockchain'],
      license: 'GPL-3.0',
      status: 'ending-soon'
    },
    {
      id: 4,
      name: 'NFT Marketplace Builder',
      description: 'No-code platform for creating NFT marketplaces',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      currentBid: '4.1 ETH',
      bidCount: 23,
      timeLeft: 'Ended',
      contributors: 12,
      tags: ['NFT', 'No-Code', 'Marketplace'],
      license: 'MIT',
      status: 'ended'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Auctions', count: auctions.length },
    { id: 'active', label: 'Active', count: auctions.filter(a => a.status === 'active').length },
    { id: 'ending-soon', label: 'Ending Soon', count: auctions.filter(a => a.status === 'ending-soon').length },
    { id: 'ended', label: 'Ended', count: auctions.filter(a => a.status === 'ended').length }
  ];

  const techFilters = ['AI', 'DeFi', 'Security', 'React', 'TypeScript', 'Web3', 'Blockchain'];

  const filteredAuctions = auctions.filter(auction => {
    const matchesSearch = auction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || auction.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleBid = (project: any) => {
    setSelectedProject(project);
    setShowBidModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Live Auctions</h1>
          <p className="text-gray-400 mt-2">Discover and bid on tokenized development projects</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-4">
          <div className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-700">
            <span className="text-gray-400 text-sm">Total Volume: </span>
            <span className="text-green-400 font-bold">127.3 ETH</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Tech Stack Filters */}
      <div className="flex flex-wrap gap-2">
        <span className="text-gray-400 text-sm font-medium">Filter by tech:</span>
        {techFilters.map((tech) => (
          <button
            key={tech}
            className="bg-gray-800 hover:bg-purple-600/20 border border-gray-700 hover:border-purple-500/30 px-3 py-1 rounded-full text-sm text-gray-300 hover:text-purple-300 transition-colors"
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Auctions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAuctions.map((auction) => (
          <div key={auction.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative">
              <img 
                src={auction.image} 
                alt={auction.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  auction.status === 'active' ? 'bg-green-600/20 text-green-400 border border-green-500/30' :
                  auction.status === 'ending-soon' ? 'bg-orange-600/20 text-orange-400 border border-orange-500/30' :
                  'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {auction.status === 'active' ? 'Active' :
                   auction.status === 'ending-soon' ? 'Ending Soon' : 'Ended'}
                </span>
              </div>
              {auction.status === 'ending-soon' && (
                <div className="absolute top-4 left-4 bg-red-600/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium border border-red-500/30 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {auction.timeLeft}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{auction.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{auction.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {auction.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Auction Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <div>
                    <p className="text-green-400 font-bold">{auction.currentBid}</p>
                    <p className="text-gray-400 text-xs">{auction.bidCount} bids</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-blue-400 font-bold">{auction.contributors}</p>
                    <p className="text-gray-400 text-xs">Contributors</p>
                  </div>
                </div>
              </div>

              {/* Time Left */}
              {auction.status !== 'ended' && (
                <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Time Left</span>
                    <span className="text-orange-400 font-bold">{auction.timeLeft}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                {auction.status === 'ended' ? (
                  <button className="flex-1 bg-gray-700 text-gray-400 py-3 rounded-lg font-medium cursor-not-allowed">
                    Auction Ended
                  </button>
                ) : (
                  <button
                    onClick={() => handleBid(auction)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Gavel className="w-4 h-4" />
                    <span>Place Bid</span>
                  </button>
                )}
                <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bid Modal */}
      {showBidModal && selectedProject && (
        <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <div className="text-center mb-6">
              <Gavel className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Place Your Bid</h3>
              <p className="text-gray-400">{selectedProject.name}</p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Current Bid</span>
                <span className="text-green-400 font-bold">{selectedProject.currentBid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Minimum Bid</span>
                <span className="text-white">2.5 ETH</span>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Your Bid (ETH)</label>
              <input
                type="number"
                step="0.01"
                min="2.5"
                placeholder="2.5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
              />
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBidModal(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowBidModal(false)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionPage;