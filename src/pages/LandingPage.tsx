
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Coins, 
  Shield, 
  Users, 
  Zap, 
  Github, 
  ArrowRight, 
  CheckCircle, 
  Wallet,
  Database
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DevVerse
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            </div>
            <Link
              to="/app"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 border border-purple-700/50 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Welcome to the Developer Economy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Your GitHub Repo is More Than a{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-300">
                It's a Product.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Welcome to DevVerse, where code becomes a digital asset. Mint your projects as NFTs, 
              gate access with BitBadges, monetize through auctions, and govern via DAOs. 
              <span className="text-purple-400 font-semibold"> This is the beginning of DevFi.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/app"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center"
              >
                Start Building Your Assets
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/app"
                className="group border-2 border-gray-600 hover:border-purple-500 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center"
              >
                <Github className="mr-2 w-5 h-5" />
                Connect GitHub
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tokenizing <span className="text-purple-400">Creativity</span>,<br />
                Not Just Collectibles
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The current Web3 space is flooded with PFPs and art collections. But what about the 
                actual value creators? Developers building the future deserve ownership, recognition, 
                and financial rewards for their work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Move beyond speculative assets to functional software</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Transform contributions into cryptocurrency rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Build without VCs, govern through community DAOs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Github className="w-8 h-8 text-gray-400" />
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                  <Coins className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">From Repository to Revenue</h3>
                <p className="text-gray-400">
                  Transform your codebase into a monetizable asset with built-in governance, 
                  access control, and revenue distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Developer-First <span className="text-blue-400">Web3 Tooling</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Web3 infrastructure that's actually useful, not gimmicky. Built by developers, for developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mint Feature */}
            <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors">
                <Coins className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mint Projects</h3>
              <p className="text-gray-400 mb-6">
                Transform your repositories into NFTs. Establish ownership, provenance, and value for your code.
              </p>
              <Link 
                to="/app/mint" 
                className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors"
              >
                Mint as NFT →
              </Link>
            </div>

            {/* Gate Feature */}
            <div className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gate Access</h3>
              <p className="text-gray-400 mb-6">
                Use BitBadges to control who can access your code. Create exclusive developer communities.
              </p>
              <Link 
                to="/app" 
                className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors"
              >
                Set Access Rules →
              </Link>
            </div>

            {/* Monetize Feature */}
            <div className="group bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-green-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors">
                <Wallet className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monetize Work</h3>
              <p className="text-gray-400 mb-6">
                Earn through auctions, royalties, and contributor splits. Your work, your revenue.
              </p>
              <Link 
                to="/app/auctions" 
                className="text-green-400 font-medium group-hover:text-green-300 transition-colors"
              >
                Start Earning →
              </Link>
            </div>

            {/* Govern Feature */}
            <div className="group bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-colors">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Govern via DAOs</h3>
              <p className="text-gray-400 mb-6">
                No VCs needed. Govern your projects through decentralized autonomous organizations.
              </p>
              <Link 
                to="/app/dao" 
                className="text-orange-400 font-medium group-hover:text-orange-300 transition-colors"
              >
                Create DAO →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Beginning of <span className="text-green-400">DevFi</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Financial primitives for code: auctions, stakes, royalties, licensing — all governed by smart contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connect & Analyze</h3>
              <p className="text-gray-400">
                Connect your GitHub account and let our AI analyze your repositories to determine value and potential.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Mint & Configure</h3>
              <p className="text-gray-400">
                Mint your project as an NFT, set access rules, define contributor splits, and establish governance parameters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Earn & Govern</h3>
              <p className="text-gray-400">
                Watch as your code generates revenue through usage, licensing, and community participation in governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$2.3M+</div>
              <div className="text-gray-400">Total Value Created</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1,247</div>
              <div className="text-gray-400">Projects Minted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">5,692</div>
              <div className="text-gray-400">Active Developers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">89</div>
              <div className="text-gray-400">Community DAOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Turn Your Code Into <span className="text-green-400">Digital Assets</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building wealth through their code. 
            Your contributions deserve recognition and rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/app"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center"
            >
              <Github className="mr-3 w-6 h-6" />
              Connect GitHub & Start
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/app/explore"
              className="group border-2 border-gray-600 hover:border-green-500 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center"
            >
              <Database className="mr-3 w-5 h-5" />
              View Demo Projects
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-12 text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Keep full ownership</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Community governed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  DevVerse
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The gateway to the developer economy. Transform your code into digital assets, 
                build community-governed projects, and earn from your contributions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <div className="space-y-2 text-gray-400">
                <Link to="/app/mint" className="block hover:text-white transition-colors">Mint Projects</Link>
                <Link to="/app" className="block hover:text-white transition-colors">BitBadges</Link>
                <Link to="/app/explore" className="block hover:text-white transition-colors">Marketplace</Link>
                <Link to="/app/dao" className="block hover:text-white transition-colors">DAOs</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">API</a>
                <a href="#" className="block hover:text-white transition-colors">Community</a>
                <a href="#" className="block hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevVerse. Building the future of developer economics.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;