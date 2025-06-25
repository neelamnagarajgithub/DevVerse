import React from 'react';
import { 
  TrendingUp, 
  Vote, 
  Award, 
  Coins, 
  Users, 
  Star,
  ExternalLink,
  Download,
  CheckCircle
} from 'lucide-react';

const ContributorPortal = () => {
  const contributedProjects = [
    {
      id: 1,
      name: 'AI Code Assistant',
      role: 'Core Contributor',
      commits: 156,
      stake: '25%',
      earned: '0.6 ETH',
      daoVotes: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'DeFi Analytics Dashboard',
      role: 'Frontend Developer',
      commits: 89,
      stake: '15%',
      earned: '0.27 ETH',
      daoVotes: 8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Smart Contract Auditor',
      role: 'Security Reviewer',
      commits: 34,
      stake: '8%',
      earned: '0.144 ETH',
      daoVotes: 5,
      status: 'completed'
    }
  ];

  const badges = [
    {
      id: 1,
      name: 'First Contribution',
      description: 'Made your first commit to a DevVerse project',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true,
      date: 'Jan 15, 2025'
    },
    {
      id: 2,
      name: 'Code Reviewer',
      description: 'Reviewed 50+ pull requests',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true,
      date: 'Feb 3, 2025'
    },
    {
      id: 3,
      name: 'DAO Participant',
      description: 'Voted on 25+ governance proposals',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: true,
      date: 'Feb 10, 2025'
    },
    {
      id: 4,
      name: 'Top Contributor',
      description: 'Be in top 10% of contributors for a project',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100',
      earned: false,
      progress: 75
    }
  ];

  const pendingRewards = [
    { project: 'AI Code Assistant', amount: '0.15 ETH', type: 'Monthly Revenue Share' },
    { project: 'DeFi Analytics Dashboard', amount: '0.08 ETH', type: 'Milestone Bonus' }
  ];

  const stats = [
    { label: 'Total Earned', value: '1.014 ETH', icon: Coins, color: 'text-green-400' },
    { label: 'Active Projects', value: '2', icon: Users, color: 'text-blue-400' },
    { label: 'DAO Votes Cast', value: '25', icon: Vote, color: 'text-purple-400' },
    { label: 'Badges Earned', value: '3', icon: Award, color: 'text-orange-400' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Contributor Portal</h1>
          <p className="text-gray-400 mt-2">Track your contributions, earnings, and governance participation</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Claim Rewards</span>
          </button>
        </div>
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contributed Projects */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Your Contributed Projects</h2>
            <div className="space-y-4">
              {contributedProjects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-purple-400 text-sm font-medium">{project.role}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'active' 
                        ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                        : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Commits</p>
                      <p className="text-white font-bold">{project.commits}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Revenue Share</p>
                      <p className="text-green-400 font-bold">{project.stake}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Earned</p>
                      <p className="text-green-400 font-bold">{project.earned}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">DAO Votes</p>
                      <p className="text-purple-400 font-bold">{project.daoVotes}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2">
                      <Vote className="w-4 h-4" />
                      <span>Vote on Proposals</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badge Wall */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Achievement Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div key={badge.id} className={`bg-gray-800 rounded-xl p-6 border transition-all ${
                  badge.earned 
                    ? 'border-green-500/30 bg-green-900/10' 
                    : 'border-gray-700'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img 
                        src={badge.image} 
                        alt={badge.name}
                        className={`w-16 h-16 rounded-xl object-cover ${
                          badge.earned ? '' : 'grayscale opacity-50'
                        }`}
                      />
                      {badge.earned && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 ${
                        badge.earned ? 'text-white' : 'text-gray-400'
                      }`}>
                        {badge.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{badge.description}</p>
                      {badge.earned ? (
                        <p className="text-green-400 text-xs">Earned on {badge.date}</p>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-orange-400 text-xs">{badge.progress}% Complete</p>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-orange-400 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${badge.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Rewards */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
              <Coins className="w-5 h-5 text-green-400" />
              <span>Pending Rewards</span>
            </h3>
            <div className="space-y-4">
              {pendingRewards.map((reward, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium text-sm">{reward.project}</p>
                    <p className="text-green-400 font-bold">{reward.amount}</p>
                  </div>
                  <p className="text-gray-400 text-xs">{reward.type}</p>
                </div>
              ))}
              <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-bold transition-colors">
                Claim All Rewards
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm">Voted on proposal "Add GPT-4 Integration"</p>
                  <p className="text-gray-400 text-xs">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm">Received 0.15 ETH revenue share</p>
                  <p className="text-gray-400 text-xs">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm">Earned "Code Reviewer" badge</p>
                  <p className="text-gray-400 text-xs">3 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-sm font-medium transition-colors">
                Browse Open Projects
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-colors">
                View DAO Proposals
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm font-medium transition-colors">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorPortal;