import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardPage = () => {
  return (
    <div>
      <Card className="relative overflow-hidden">
        <img src={'https://picsum.photos/id/237/400/300'} alt="image" className="object-cover"/>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description Card DescriptionCard DescriptionCard Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPage;
