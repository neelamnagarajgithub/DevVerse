import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Vote,
  Github,
  Star,
  Eye,
  Lock,
  Unlock
} from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [isGated, setIsGated] = useState(false);

  const project = {
    id: 1,
    name: 'AI Code Assistant',
    description: 'A powerful VS Code extension that provides AI-powered code completion, bug detection, and optimization suggestions. Built with TypeScript and integrates with multiple AI models.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'minted',
    githubUrl: 'https://github.com/devverse/ai-code-assistant',
    contributors: 12,
    currentBid: '2.4 ETH',
    auctionEnds: '2 days, 14 hours',
    revenue: '2.4 ETH',
    tags: ['AI', 'VSCode', 'TypeScript'],
    nftBadge: true,
    owner: '0x1234...5678'
  };

  const contributors = [
    { name: 'Alice Chen', avatar: 'AC', commits: 156, stake: '25%' },
    { name: 'Bob Smith', avatar: 'BS', commits: 89, stake: '15%' },
    { name: 'Carol Davis', avatar: 'CD', commits: 67, stake: '12%' },
    { name: 'David Wilson', avatar: 'DW', commits: 45, stake: '8%' }
  ];

  const daoProposals = [
    { id: 1, title: 'Add GPT-4 Integration', status: 'active', votes: 45, timeLeft: '3 days' },
    { id: 2, title: 'Implement Dark Mode', status: 'passed', votes: 67, timeLeft: 'Ended' },
    { id: 3, title: 'Mobile App Version', status: 'pending', votes: 23, timeLeft: '5 days' }
  ];

  const tabs = [
    { id: 'about', label: 'About', icon: Eye },
    { id: 'contributors', label: 'Contributors', icon: Users },
    { id: 'dao', label: 'DAO Votes', icon: Vote },
    { id: 'access', label: 'Access Settings', icon: Shield }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Project Description</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">NFT Ownership History</h3>
              <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Minted by</span>
                  <span className="text-purple-400 font-mono">{project.owner}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Current Owner</span>
                  <span className="text-purple-400 font-mono">{project.owner}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Mint Date</span>
                  <span className="text-gray-300">Jan 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contributors':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Contributors ({contributors.length})</h3>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                Invite Contributor
              </button>
            </div>
            
            <div className="space-y-4">
              {contributors.map((contributor, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      {contributor.avatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{contributor.name}</p>
                      <p className="text-gray-400 text-sm">{contributor.commits} commits</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{contributor.stake}</p>
                    <p className="text-gray-400 text-sm">Revenue Share</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-white font-bold mb-4">Contribution Graph</h4>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 365 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7 ? 'bg-green-400' :
                      Math.random() > 0.5 ? 'bg-green-600' :
                      Math.random() > 0.3 ? 'bg-green-800' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'dao':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">DAO Proposals</h3>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                Create Proposal
              </button>
            </div>
            
            <div className="space-y-4">
              {daoProposals.map((proposal) => (
                <div key={proposal.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">{proposal.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{proposal.votes} votes</span>
                        <span>{proposal.timeLeft}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      proposal.status === 'active' ? 'bg-green-600/20 text-green-400' :
                      proposal.status === 'passed' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-orange-600/20 text-orange-400'
                    }`}>
                      {proposal.status}
                    </span>
                  </div>
                  
                  {proposal.status === 'active' && (
                    <div className="flex space-x-3">
                      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors">
                        Vote Yes
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors">
                        Vote No
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'access':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Access Control</h3>
              <p className="text-gray-400 mb-6">Configure who can access your project using BitBadges and NFT ownership.</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-bold">Public Access</h4>
                  <p className="text-gray-400 text-sm">Anyone can view the project</p>
                </div>
                <button
                  onClick={() => setIsGated(!isGated)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isGated ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isGated ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              {isGated && (
                <div className="space-y-4 pt-4 border-t border-gray-700">
                  <div>
                    <label className="block text-white font-medium mb-2">Required Badge</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                      <option>Developer Badge #1</option>
                      <option>Contributor Badge #2</option>
                      <option>Premium Access Badge #3</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Access Level</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white">
                      <option>Viewer</option>
                      <option>Editor</option>
                      <option>Maintainer</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to={`/app/gating/${project.id}`}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Advanced Settings</span>
            </Link>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link
        to="/app"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Project Image */}
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.name}
              className={`w-full h-64 object-cover rounded-xl ${isGated ? 'blur-sm' : ''}`}
            />
            {project.nftBadge && (
              <div className="absolute top-4 left-4 bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                NFT Minted
              </div>
            )}
            {isGated && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 rounded-xl">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-bold mb-2">Content Gated</p>
                  <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                    Unlock via BitBadge NFT
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Auction Info */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Current Auction</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Bid</span>
                <span className="text-green-400 font-bold">{project.currentBid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Auction Ends</span>
                <span className="text-orange-400">{project.auctionEnds}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all">
                Place Bid
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Project Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Contributors</span>
                </div>
                <span className="text-white">{project.contributors}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Revenue</span>
                </div>
                <span className="text-green-400">{project.revenue}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Repository</span>
                </div>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl border border-gray-700">
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
              <h1 className="text-3xl font-bold text-white mb-2">{project.name}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-700">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-purple-500 text-purple-400'
                          : 'border-transparent text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;