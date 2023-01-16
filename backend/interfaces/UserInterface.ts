interface UserInterface { name: string; password: string; email: string; socialLinks: { link: string; socialName?: string | undefined; }[]; bcgColor: string; bcgImg?: string | undefined; }

export default UserInterface