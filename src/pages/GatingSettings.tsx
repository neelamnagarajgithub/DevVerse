import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Users, 
  Eye, 
  Edit, 
  Crown, 
  Lock, 
  Unlock,
  Plus,
  Trash2,
  Settings
} from 'lucide-react';

const GatingSettings = () => {
  const { id } = useParams();
  const [accessRules, setAccessRules] = useState([
    {
      id: 1,
      name: 'Public Viewers',
      description: 'Anyone can view project details',
      level: 'viewer',
      requirement: 'none',
      enabled: true
    },
    {
      id: 2,
      name: 'Contributor Access',
      description: 'Contributors can edit and commit',
      level: 'editor',
      requirement: 'contributor-badge',
      enabled: true
    },
    {
      id: 3,
      name: 'Maintainer Access',
      description: 'Full project management access',
      level: 'maintainer',
      requirement: 'maintainer-nft',
      enabled: true
    }
  ]);

  const [previewUser, setPreviewUser] = useState('public');

  const project = {
    name: 'AI Code Assistant',
    description: 'VS Code extension for AI-powered code completion',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const badges = [
    { id: 'contributor-badge', name: 'Contributor Badge #1', holders: 156 },
    { id: 'premium-badge', name: 'Premium Access Badge #2', holders: 89 },
    { id: 'maintainer-nft', name: 'Maintainer NFT #3', holders: 12 }
  ];

  const accessLevels = [
    { id: 'viewer', name: 'Viewer', description: 'Can view project details and documentation' },
    { id: 'editor', name: 'Editor', description: 'Can view, comment, and suggest changes' },
    { id: 'maintainer', name: 'Maintainer', description: 'Full access including project settings' }
  ];

  const requirements = [
    { id: 'none', name: 'No Requirement', description: 'Open to everyone' },
    { id: 'contributor-badge', name: 'Contributor Badge', description: 'Must hold contributor badge' },
    { id: 'premium-badge', name: 'Premium Badge', description: 'Must hold premium access badge' },
    { id: 'maintainer-nft', name: 'Maintainer NFT', description: 'Must own maintainer NFT' },
    { id: 'custom-token', name: 'Custom Token', description: 'Must hold specific token amount' }
  ];

  const toggleRule = (ruleId: number) => {
    setAccessRules(rules => 
      rules.map(rule => 
        rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  const addNewRule = () => {
    const newRule = {
      id: Date.now(),
      name: 'New Access Rule',
      description: 'Configure access requirements',
      level: 'viewer',
      requirement: 'none',
      enabled: false
    };
    setAccessRules([...accessRules, newRule]);
  };

  const removeRule = (ruleId: number) => {
    setAccessRules(rules => rules.filter(rule => rule.id !== ruleId));
  };

  const getPreviewContent = () => {
    switch (previewUser) {
      case 'public':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Project Overview</h4>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-medium">Restricted Content</span>
              </div>
              <p className="text-gray-400 text-sm">Source code and detailed documentation require contributor access.</p>
            </div>
          </div>
        );
      case 'contributor':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Project Overview</h4>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Unlock className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium">Full Access Granted</span>
              </div>
              <p className="text-gray-400 text-sm">You can view source code, documentation, and contribute to the project.</p>
            </div>
          </div>
        );
      case 'maintainer':
        return (
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Project Overview</h4>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium">Maintainer Access</span>
              </div>
              <p className="text-gray-400 text-sm">Full project control including settings, access management, and revenue distribution.</p>
            </div>
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
        to={`/app/project/${id}`}
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Project</span>
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Access Control Settings</h1>
        <p className="text-gray-400">Configure who can access your project using BitBadges and NFT ownership</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Info */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-white font-bold text-lg">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Access Rules */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Access Rules</h3>
              <button
                onClick={addNewRule}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Rule</span>
              </button>
            </div>

            <div className="space-y-4">
              {accessRules.map((rule) => (
                <div key={rule.id} className={`border rounded-lg p-4 transition-all ${
                  rule.enabled 
                    ? 'border-purple-500/30 bg-purple-900/10' 
                    : 'border-gray-600 bg-gray-700/30'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-white font-medium">{rule.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rule.level === 'viewer' ? 'bg-blue-600/20 text-blue-400' :
                          rule.level === 'editor' ? 'bg-green-600/20 text-green-400' :
                          'bg-purple-600/20 text-purple-400'
                        }`}>
                          {rule.level}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{rule.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">Access Level</label>
                          <select 
                            value={rule.level}
                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                          >
                            {accessLevels.map(level => (
                              <option key={level.id} value={level.id}>{level.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-1">Requirement</label>
                          <select 
                            value={rule.requirement}
                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                          >
                            {requirements.map(req => (
                              <option key={req.id} value={req.id}>{req.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleRule(rule.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          rule.enabled ? 'bg-purple-600' : 'bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          rule.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                      <button
                        onClick={() => removeRule(rule.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BitBadge Integration */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold text-lg mb-4">Available Badges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div key={badge.id} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{badge.name}</h4>
                    <span className="text-purple-400 text-sm">{badge.holders} holders</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    Configure Badge →
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Connect BitBadge API
            </button>
          </div>
        </div>

        {/* Preview Sidebar */}
        <div className="space-y-6">
          {/* Preview Controls */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Preview Access</h3>
            <div className="space-y-3">
              <button
                onClick={() => setPreviewUser('public')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  previewUser === 'public' 
                    ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Eye className="w-4 h-4" />
                  <span className="font-medium">Public User</span>
                </div>
              </button>
              <button
                onClick={() => setPreviewUser('contributor')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  previewUser === 'contributor' 
                    ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Edit className="w-4 h-4" />
                  <span className="font-medium">Contributor</span>
                </div>
              </button>
              <button
                onClick={() => setPreviewUser('maintainer')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  previewUser === 'maintainer' 
                    ? 'bg-purple-600/20 border border-purple-500/30 text-purple-300' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Crown className="w-4 h-4" />
                  <span className="font-medium">Maintainer</span>
                </div>
              </button>
            </div>
          </div>

          {/* Preview Content */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Access Preview</h3>
            {getPreviewContent()}
          </div>

          {/* Save Changes */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Save Changes</h3>
            <p className="text-gray-400 text-sm mb-4">
              Changes will be applied immediately and affect all future access attempts.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-bold transition-all">
              Apply Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatingSettings;