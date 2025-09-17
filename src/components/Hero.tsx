@@ .. @@
 const Hero = () => {
   const { user } = useAuth();
 }
 
   return (
   )
-    <section className="relative min-h-screen bg-gradient-earth overflow-hidden">
+    <section id="hero" className="relative min-h-screen bg-gradient-earth overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <img 
@@ .. @@
           <div className="space-y-8">
             <div className="flex items-center gap-3 mb-6">
               <img 
                 src={vayuMascot} 
                 alt="Vayu - ClimaQuest mascot" 
-                className="w-16 h-16 animate-bounce"
+                className="w-16 h-16 animate-bounce drop-shadow-lg"
               />
               <div>
-                <h2 className="text-lg font-medium text-muted-foreground">Meet Vayu, Your Climate Guide</h2>
+                <h2 className="text-lg font-medium text-muted-foreground animate-pulse">Meet Vayu, Your Climate Guide ✨</h2>
               </div>
             </div>
 
             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
-              <span className="bg-gradient-hero bg-clip-text text-transparent">
+              <span className="bg-gradient-hero bg-clip-text text-transparent animate-pulse">
                 ClimaQuest
               </span>
             </h1>
@@ .. @@
             <div className="flex flex-col sm:flex-row gap-4">
               {user ? (
               )
               }
-                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
+                <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group">
+                  <span className="relative z-10">
                   Continue Your Quest
+                  </span>
+                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                 </Button>
               ) : (
-                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
+                <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group" asChild>
                   <Link to="/auth">Start Your Quest</Link>
                 </Button>
               )}
-              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
+              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 hover:bg-primary/5 transition-all duration-300">
                 Learn More
               </Button>
             </div>
@@ .. @@
       {/* Floating Elements */}
-      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
-      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000" />
+      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse">
+        <div className="absolute inset-2 bg-primary/20 rounded-full animate-ping"></div>
+      </div>
+      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000">
+        <div className="absolute inset-2 bg-accent/20 rounded-full animate-ping delay-500"></div>
+      </div>
+      <div className="absolute top-1/2 left-20 w-12 h-12 bg-pathfinder/10 rounded-full animate-bounce delay-700">
+        <div className="absolute inset-1 bg-pathfinder/20 rounded-full animate-pulse"></div>
+      </div>
     </section>
   );
 };