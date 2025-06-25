import React, { useState } from 'react';
import { 
  Vote, 
  Plus, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Users, 
  TrendingUp,
  AlertCircle,
  Calendar,
  MessageSquare
} from 'lucide-react';

const DAOGovernance = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const proposals = [
    {
      id: 1,
      title: 'Add GPT-4 Integration to AI Code Assistant',
      description: 'Integrate OpenAI GPT-4 API to improve code completion accuracy and add natural language to code conversion features.',
      author: '0x1234...5678',
      status: 'active',
      votesFor: 156,
      votesAgainst: 23,
      totalVotes: 179,
      quorum: 200,
      timeLeft: '3 days, 14 hours',
      created: '2 days ago',
      category: 'Feature',
      project: 'AI Code Assistant'
    },
    {
      id: 2,
      title: 'Implement Dark Mode for DeFi Dashboard',
      description: 'Add dark mode theme option to improve user experience and reduce eye strain during extended usage.',
      author: '0x5678...9012',
      status: 'passed',
      votesFor: 234,
      votesAgainst: 45,
      totalVotes: 279,
      quorum: 200,
      timeLeft: 'Ended',
      created: '1 week ago',
      category: 'UI/UX',
      project: 'DeFi Analytics Dashboard'
    },
    {
      id: 3,
      title: 'Revenue Split Adjustment for Contributors',
      description: 'Adjust revenue distribution to allocate 5% more to active contributors and reduce passive holder rewards.',
      author: '0x9012...3456',
      status: 'rejected',
      votesFor: 89,
      votesAgainst: 167,
      totalVotes: 256,
      quorum: 200,
      timeLeft: 'Ended',
      created: '2 weeks ago',
      category: 'Governance',
      project: 'Smart Contract Auditor'
    },
    {
      id: 4,
      title: 'Mobile App Development Initiative',
      description: 'Allocate budget for developing mobile applications for our top 3 performing projects.',
      author: '0x3456...7890',
      status: 'pending',
      votesFor: 45,
      votesAgainst: 12,
      totalVotes: 57,
      quorum: 200,
      timeLeft: '5 days, 8 hours',
      created: '1 day ago',
      category: 'Development',
      project: 'Multiple Projects'
    }
  ];

  const stats = [
    { label: 'Active Proposals', value: '2', icon: Vote, color: 'text-blue-400' },
    { label: 'Total Proposals', value: '47', icon: MessageSquare, color: 'text-purple-400' },
    { label: 'Your Voting Power', value: '1,247', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Participation Rate', value: '78%', icon: Users, color: 'text-orange-400' }
  ];

  const filteredProposals = proposals.filter(proposal => {
    if (activeTab === 'all') return true;
    return proposal.status === activeTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'passed': return 'text-blue-400 bg-blue-600/20 border-blue-500/30';
      case 'rejected': return 'text-red-400 bg-red-600/20 border-red-500/30';
      case 'pending': return 'text-orange-400 bg-orange-600/20 border-orange-500/30';
      default: return 'text-gray-400 bg-gray-600/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return Clock;
      case 'passed': return CheckCircle;
      case 'rejected': return XCircle;
      case 'pending': return AlertCircle;
      default: return Clock;
    }
  };

  const calculateProgress = (votesFor: number, votesAgainst: number, quorum: number) => {
    const totalVotes = votesFor + votesAgainst;
    const forPercentage = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;
    const quorumPercentage = (totalVotes / quorum) * 100;
    return { forPercentage, quorumPercentage: Math.min(quorumPercentage, 100) };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">DAO Governance</h1>
          <p className="text-gray-400 mt-2">Participate in decentralized decision making for DevVerse projects</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="mt-4 sm:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create Proposal</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'active', label: 'Active', count: proposals.filter(p => p.status === 'active').length },
            { id: 'pending', label: 'Pending', count: proposals.filter(p => p.status === 'pending').length },
            { id: 'passed', label: 'Passed', count: proposals.filter(p => p.status === 'passed').length },
            { id: 'rejected', label: 'Rejected', count: proposals.filter(p => p.status === 'rejected').length },
            { id: 'all', label: 'All', count: proposals.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Proposals List */}
      <div className="space-y-6">
        {filteredProposals.map((proposal) => {
          const StatusIcon = getStatusIcon(proposal.status);
          const { forPercentage, quorumPercentage } = calculateProgress(
            proposal.votesFor, 
            proposal.votesAgainst, 
            proposal.quorum
          );

          return (
            <div key={proposal.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{proposal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proposal.status)}`}>
                      <StatusIcon className="w-3 h-3 inline mr-1" />
                      {proposal.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{proposal.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span>By {proposal.author}</span>
                    <span>•</span>
                    <span>{proposal.created}</span>
                    <span>•</span>
                    <span className="text-purple-400">{proposal.project}</span>
                    <span>•</span>
                    <span className="bg-gray-700 px-2 py-1 rounded text-xs">{proposal.category}</span>
                  </div>
                </div>
                
                {proposal.status === 'active' && (
                  <div className="text-right ml-6">
                    <p className="text-orange-400 font-medium text-sm">{proposal.timeLeft}</p>
                    <p className="text-gray-400 text-xs">remaining</p>
                  </div>
                )}
              </div>

              {/* Voting Progress */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Votes For</p>
                    <p className="text-green-400 font-bold text-lg">{proposal.votesFor}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Votes Against</p>
                    <p className="text-red-400 font-bold text-lg">{proposal.votesAgainst}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Quorum Progress</p>
                    <p className="text-blue-400 font-bold text-lg">{proposal.totalVotes}/{proposal.quorum}</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Support: {forPercentage.toFixed(1)}%</span>
                    <span>Quorum: {quorumPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${forPercentage}%` }}
                    />
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${quorumPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Voting Buttons */}
                {proposal.status === 'active' && (
                  <div className="flex space-x-3 pt-4">
                    <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Vote Yes</span>
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                      <XCircle className="w-4 h-4" />
                      <span>Vote No</span>
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Proposal Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Create New Proposal</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Proposal Title *</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                  placeholder="Enter proposal title"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description *</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none"
                  placeholder="Describe your proposal in detail"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Category</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors">
                    <option>Feature</option>
                    <option>UI/UX</option>
                    <option>Development</option>
                    <option>Governance</option>
                    <option>Security</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Project</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors">
                    <option>AI Code Assistant</option>
                    <option>DeFi Analytics Dashboard</option>
                    <option>Smart Contract Auditor</option>
                    <option>Multiple Projects</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Voting Duration</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors">
                  <option>3 days</option>
                  <option>7 days</option>
                  <option>14 days</option>
                  <option>30 days</option>
                </select>
              </div>

              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-blue-300 text-sm font-medium mb-1">Proposal Requirements</p>
                    <ul className="text-blue-300 text-xs space-y-1">
                      <li>• Minimum 100 voting power required to create proposals</li>
                      <li>• Proposals need 200 votes to reach quorum</li>
                      <li>• Simple majority (50%) required to pass</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all"
                >
                  Create Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DAOGovernance;