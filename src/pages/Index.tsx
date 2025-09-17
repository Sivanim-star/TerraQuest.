@@ .. @@
 const Index = () => {
   return (
     <div className="min-h-screen">
       <Header />
       <main>
         <Hero />
         <Features />
+        
+        {/* Games Section */}
+        <section id="games" className="py-20 bg-background">
+          <div className="container mx-auto px-4 text-center">
+            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
+              Climate <span className="bg-gradient-explorer bg-clip-text text-transparent">Games</span> 🎮
+            </h2>
+            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
+              Learn through play with our engaging climate-themed games and interactive challenges.
+            </p>
+            <div className="text-6xl mb-8 animate-bounce">🎯</div>
+            <p className="text-lg text-muted-foreground">Coming Soon - Exciting climate games await!</p>
+          </div>
+        </section>
+
+        {/* Challenges Section */}
+        <section id="challenges" className="py-20 bg-gradient-earth">
+          <div className="container mx-auto px-4 text-center">
+            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
+              Climate <span className="bg-gradient-innovator bg-clip-text text-transparent">Challenges</span> 🏆
+            </h2>
+            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
+              Take on real-world climate action challenges and make a difference in your community.
+            </p>
+            <div className="text-6xl mb-8 animate-pulse">🌍</div>
+            <p className="text-lg text-muted-foreground">Ready to become a climate action hero?</p>
+          </div>
+        </section>

+        {/* Community Section */}
+        <section id="community" className="py-20 bg-background">
+          <div className="container mx-auto px-4 text-center">
+            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
+              Join Our <span className="bg-gradient-pathfinder bg-clip-text text-transparent">Community</span> 👥
+            </h2>
+            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
+              Connect with fellow climate heroes, share your achievements, and learn together.
+            </p>
+            <div className="text-6xl mb-8 animate-bounce delay-300">🤝</div>
+            <p className="text-lg text-muted-foreground">Building a sustainable future together!</p>
+          </div>
+        </section>

+        {/* About Section */}
+        <section id="about" className="py-20 bg-gradient-earth">
+          <div className="container mx-auto px-4 text-center">
+            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
+              About <span className="bg-gradient-hero bg-clip-text text-transparent">ClimaQuest</span> 🌱
+            </h2>
+            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
+              We're on a mission to make climate education fun, engaging, and accessible for everyone. 
+              Join us in creating a generation of climate-conscious heroes!
+            </p>
+            <div className="text-6xl mb-8 animate-spin-slow">🌟</div>
+            <p className="text-lg text-muted-foreground">Empowering the next generation of climate champions!</p>
+          </div>
+        </section>
       </main>
       <Footer />
     </div>
   )
 }