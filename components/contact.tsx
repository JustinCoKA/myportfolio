"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 서버(route.ts)는 request.json()을 읽으므로 JSON으로 보냄
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // 허니팟(봇 방지). 실제 유저는 비워서 전송됨
          company: "",
        }),
      });

      const json = await res.json();
      if (!res.ok || !json?.success) {
        alert(json?.message || "Failed to send message. Please try again.");
        return;
      }

      alert("Message sent! Please check your inbox.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data
            engineering and technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:ausjustin12@gmail.com" className="font-medium hover:text-primary transition-colors">
                        ausjustin12@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/dataausjustin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        /in/dataausjustin
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/JustinCoKA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        /JustinCoKA
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex gap-3">
                <Button className="flex-1 gap-2" asChild>
                  <a href="https://www.linkedin.com/in/dataausjustin/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                  <a href="https://github.com/JustinCoKA" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 허니팟(봇 방지) - 사용자에게는 숨김 */}
                  <input
                    type="text"
                    name="company"
                    autoComplete="off"
                    tabIndex={-1}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
