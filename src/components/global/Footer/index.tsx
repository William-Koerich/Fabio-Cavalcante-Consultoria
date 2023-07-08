import * as S from "./styles"
import { Button } from '@/components/ui/Button'

export function Footer() {
    return(
        <>
            <S.FooterContainer>
                <S.SocialLinks>
                    <S.SocialLink href="https://www.facebook.com">Facebook</S.SocialLink>
                    <S.SocialLink href="https://www.twitter.com">Twitter</S.SocialLink>
                    <div className="container-credits">
                        <S.SocialLink href="https://www.instagram.com">Instagram</S.SocialLink>
                        <S.Credits>
                            Desenvolvido por <a href="https://www.williamkoerich.com.br">William Koerich</a>
                        </S.Credits>
                    </div>
                </S.SocialLinks>
                <S.Credits className="credits">
                    Desenvolvido por <a href="www.williamkoerich.com.br">William Koerich</a>
                </S.Credits>
                <S.NewsletterForm>
                    <S.NewsletterInput type="email" placeholder="Newsletter(Email)" />
                    <S.ButtonContainer>
                        <Button>Send</Button>
                    </S.ButtonContainer>
                </S.NewsletterForm>
                <S.SocialLinks>
                    <S.SocialLink href="https://www.facebook.com">Licensing</S.SocialLink>
                    <S.SocialLink href="https://www.twitter.com">Styles</S.SocialLink>
                    <S.SocialLink href="https://www.instagram.com">Changelog</S.SocialLink>
                </S.SocialLinks>
            </S.FooterContainer>
        </>
    )
}