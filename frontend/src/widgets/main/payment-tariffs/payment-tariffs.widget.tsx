import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconCreditCard } from '@tabler/icons-react'

import classes from './payment-tariffs.module.css'

interface IProps {
    paymentUrl: string
    tariffAmounts: number[]
}

export const PaymentTariffsWidget = ({ paymentUrl, tariffAmounts }: IProps) => {
    if (tariffAmounts.length === 0 || paymentUrl === '') {
        return null
    }

    return (
        <Paper
            p="lg"
            radius="md"
            style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <Stack gap="md">
                <Group gap="xs">
                    <IconCreditCard color="var(--mantine-color-green-6)" size={24} />
                    <Title c="white" fw={600} order={4}>
                        Оплата
                    </Title>
                </Group>

                <Group gap="sm" grow>
                    {tariffAmounts.map((amount) => {
                        let href = paymentUrl
                        try {
                            const url = new URL(paymentUrl)
                            url.searchParams.set('amount', String(amount))
                            href = url.toString()
                        } catch {
                            const separator = paymentUrl.includes('?') ? '&' : '?'
                            href = `${paymentUrl}${separator}amount=${amount}`
                        }

                        return (
                            <Button
                                className={classes.tariffButton}
                                color="green"
                                component="a"
                                href={href}
                                key={amount}
                                radius="md"
                                rel="noopener noreferrer"
                                size="lg"
                                target="_blank"
                                variant="outline"
                            >
                                <Text fw={700} size="lg">
                                    {amount} ₽
                                </Text>
                            </Button>
                        )
                    })}
                </Group>
            </Stack>
        </Paper>
    )
}
