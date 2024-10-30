import React from 'react'

export const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    link: "text-blue-600 hover:text-blue-800 underline"
  }
  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 border-b ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  )
}

export const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  )
}

export const Input = ({ className = '', ...props }) => {
  return (
    <input className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} {...props} />
  )
}

export const Textarea = ({ className = '', ...props }) => {
  return (
    <textarea className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} {...props} />
  )
}

export const Badge = ({ children, className = '', ...props }) => {
  return (
    <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${className}`} {...props}>
      {children}
    </span>
  )
}

export const Separator = ({ className = '', ...props }) => {
  return (
    <hr className={`border-t border-gray-300 my-4 ${className}`} {...props} />
  )
}

export const ScrollArea = ({ children, className = '', ...props }) => {
  return (
    <div className={`overflow-auto ${className}`} {...props}>
      {children}
    </div>
  )
}

export const Tabs = ({ children, className = '', ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}

export const TabsList = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex space-x-2 mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const TabsTrigger = ({ children, className = '', ...props }) => {
  return (
    <button className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} {...props}>
      {children}
    </button>
  )
}

export const TabsContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}