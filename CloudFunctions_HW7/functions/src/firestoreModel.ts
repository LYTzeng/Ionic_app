export type Member = {
    id: string
    name: string
    phone: string
    email: string
    lineId: string
    fcmToken: string
}

export type Student = {
    id: string
    studentId: string
    department: string
    performance: Performance
    member: Member
}

export type Performance = {
    id: string
    attendCount: number
    submitCount: number
    practiceCount: number
    totalPracticeTime: string
    practiceAll: string
    practiceRate: string
    practiceRank: number
    actionState: number
    grade: number
}

export type Admin = {
    id: string
    account: string
    member: Member
    role: string
    chatCount: ChatCount
    chatMessages?: ChatMessage[]
}

export type ChatCount = {
    postCount: number
    sendCount: number
    receiveCount: number
}

export type ChatMessage = {
    id: string
    sender: string
    receiver: string
    message: string
    timestamp: number
}

export type AppMessage = {
    id: string
    appId: AppId
    message: ChatMessage
}

export type AppId = {
    id: string
    name: string
    organization: string
}