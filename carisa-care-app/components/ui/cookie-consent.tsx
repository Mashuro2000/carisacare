"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)
  }

  const handleClose = () => {
    localStorage.setItem("cookie-consent", "essential-only")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            This website utilises technologies such as cookies to enable essential site functionality, 
            as well as for analytics, personalisation, and targeted advertising. You may change your 
            settings at any time or accept the default settings. You may close this banner to continue 
            with only essential cookies.{" "}
            <Link href="/cookie-policy" className="text-rose-600 hover:text-rose-700 underline">
              Cookie Policy
            </Link>{" "}
            <Link href="/terms-and-conditions" className="text-rose-600 hover:text-rose-700 underline">
              Terms and Conditions
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleAccept}
              className="bg-rose-600 hover:bg-rose-700 flex-1"
            >
              Accept All Cookies
            </Button>
            <Button 
              onClick={handleReject}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
            >
              Reject Non-Essential
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 