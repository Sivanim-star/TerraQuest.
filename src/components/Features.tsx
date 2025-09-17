@@ .. @@
   return (
   )
-    <section id="features" className="py-20 bg-gradient-earth">
+    <section id="learn" className="py-20 bg-gradient-earth">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-16">
-          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
+          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
             Powerful Features for 
             <span className="bg-gradient-hero bg-clip-text text-transparent"> Climate Learning</span>
           </h2>
-          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
+          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
             Discover a comprehensive platform designed to make climate education engaging, 
             interactive, and impactful for learners of all ages.
           </p>
@@ .. @@
           {features.map((feature, index) => (
             <Card 
               key={index} 
)
)
}
-              className="p-6 hover:shadow-strong transition-all duration-300 group border-border/50 bg-card/80 backdrop-blur-sm"
+              className="p-6 hover:shadow-strong hover:scale-105 transition-all duration-500 group border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 animate-fade-in"
+              style={{ animationDelay: `${index * 150}ms` }}
             >
               <div className="space-y-4">
                 <div className="flex items-center justify-between">
-                  <div className={`p-3 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
+                  <div className={`p-3 rounded-lg ${feature.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                     <feature.icon className="w-6 h-6" />
                   </div>
-                  <Badge variant="secondary" className="text-xs">
+                  <Badge variant="secondary" className="text-xs group-hover:scale-110 transition-transform duration-300">
                     {feature.badge}
                   </Badge>
                 </div>
                 
-                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
+                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                   {feature.title}
                 </h3>
                 
-                <p className="text-muted-foreground leading-relaxed">
+                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                   {feature.description}
                 </p>
               </div>
@@ .. @@
         {/* Stats Section */}
-        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
-          <h3 className="text-2xl font-bold text-center mb-8">
+        <div className="bg-primary/5 rounded-2xl p-8 mb-12 hover:bg-primary/10 transition-colors duration-500">
+          <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in">
             Join Our Growing Community
           </h3>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
             )
             )
             }
-              <div key={index} className="text-center">
-                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
+              <div 
+                key={index} 
+                className="text-center group cursor-pointer animate-fade-in hover:scale-110 transition-all duration-300"
+                style={{ animationDelay: `${index * 100}ms` }}
+              >
+                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                   <stat.icon className="w-8 h-8 text-primary" />
                 </div>
-                <div className="text-3xl font-bold text-primary mb-1">
+                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                   {stat.number}
                 </div>
-                <div className="text-sm text-muted-foreground">
+                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                   {stat.label}
                 </div>
               </div>
@@ .. @@
         {/* CTA */}
         <div className="text-center">
           <Button 
             variant="hero" 
             size="lg" 
-            className="text-lg px-8 py-6"
+            className="text-lg px-8 py-6 hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group animate-fade-in"
             onClick={() => window.location.href = '/auth'}
           >
-            Start Learning Today
+            <span className="relative z-10">Start Learning Today 🚀</span>
+            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
           </Button>
         </div>
       </div>