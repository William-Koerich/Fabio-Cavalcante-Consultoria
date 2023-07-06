import * as S from './style'
import { Button } from '@/components/ui/Button'

export function Form() {
    return (
        <>
            <S.Container>
                <S.FormContainer>
                    <S.Title>Get Free Quote</S.Title>
                        <S.Input type="text" placeholder="Name" />
                        <S.Input type="email" placeholder="Email" />
                        <S.Input type="tel" placeholder="Phone" />
                        <S.ButtonContainer>
                            <Button
                                borderRadius="2px"
                            >
                                Submit Request
                            </Button>
                        </S.ButtonContainer>
                </S.FormContainer>
            </S.Container>
            
        </>
    )
}